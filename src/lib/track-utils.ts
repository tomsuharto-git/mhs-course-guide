import { allTracks } from '@/data/tracks';
import { Track } from '@/data/types';

export interface PathwayNextGroup {
  pathwayLabel: string;
  courseIds: string[];
}

export interface PathwayNextResult {
  trackId: string;
  trackName: string;
  groups: PathwayNextGroup[];
}

/**
 * Given a courseId, find what comes "next" in the pathway by looking at
 * the track grid: same row, next column. Groups results by pathway label.
 *
 * Returns null if the course isn't in any track, or if there are no
 * next-column courses (e.g., Grade 12 terminal courses).
 */
export function getPathwayNext(courseId: string): PathwayNextResult | null {
  for (const track of allTracks) {
    // Only pathway-table tracks have meaningful row-based progression
    if (!track.rowGroups || track.rowGroups.length === 0) continue;

    const nodes = track.nodes.filter((n) => n.courseId === courseId);
    if (nodes.length === 0) continue;

    const maxCol = Math.max(...track.nodes.map((n) => n.col));
    const groups: PathwayNextGroup[] = [];

    for (const node of nodes) {
      if (node.col >= maxCol) continue; // last column, no next

      // Find all nodes in the same row at the next column
      const nextNodes = track.nodes.filter(
        (n) => n.row === node.row && n.col === node.col + 1
      );
      if (nextNodes.length === 0) continue;

      // Find the pathway label for this row
      const rowGroup = track.rowGroups?.find(
        (g) => node.row >= g.startRow && node.row <= g.endRow
      );
      const label = rowGroup?.label || `Row ${node.row}`;

      // Deduplicate: check if we already have a group with identical courseIds
      const courseIds = [...new Set(nextNodes.map((n) => n.courseId))];
      const existing = groups.find((g) => g.pathwayLabel === label);
      if (existing) {
        // Merge courseIds
        for (const id of courseIds) {
          if (!existing.courseIds.includes(id)) existing.courseIds.push(id);
        }
      } else {
        groups.push({ pathwayLabel: label, courseIds });
      }
    }

    if (groups.length === 0) return null;

    // Deduplicate groups that have identical course lists
    const deduped = deduplicateGroups(groups);

    return {
      trackId: track.id,
      trackName: track.name,
      groups: deduped,
    };
  }

  return null;
}

/**
 * Merge groups that have the exact same set of courseIds into one group
 * with combined labels, e.g. "Honors / Academic" if both have the same next courses.
 */
function deduplicateGroups(groups: PathwayNextGroup[]): PathwayNextGroup[] {
  const result: PathwayNextGroup[] = [];

  for (const group of groups) {
    const sortedIds = [...group.courseIds].sort().join(',');
    const match = result.find(
      (g) => [...g.courseIds].sort().join(',') === sortedIds
    );
    if (match) {
      // Combine labels
      match.pathwayLabel += ` / ${group.pathwayLabel}`;
    } else {
      result.push({ ...group, courseIds: [...group.courseIds] });
    }
  }

  return result;
}

/**
 * Get the track that contains a given course (by department match + node presence).
 */
export function getTrackForCourse(courseId: string): Track | null {
  for (const track of allTracks) {
    if (track.nodes.some((n) => n.courseId === courseId)) {
      return track;
    }
  }
  return null;
}
