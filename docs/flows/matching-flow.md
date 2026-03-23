# Lost/Found Matching Flow

## Goal
Find likely matches between passenger lost-item reports and found-item records.

## Flow
1. Backend receives a new or updated lost-item report.
2. Matching agent loads candidate found items from storage.
3. Agent compares semantic descriptions and metadata (route/station/time windows).
4. Agent returns ranked matches with confidence scores.
5. Backend stores match results and updates report status.
6. Passenger is notified when confidence crosses threshold.

## Outputs
- Ranked candidate matches
- Match confidence and rationale
