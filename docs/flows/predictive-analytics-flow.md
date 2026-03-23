# Predictive Analytics Flow

## Goal
Identify loss hotspots to help transit authorities proactively reduce incidents.

## Flow
1. Analytics job loads historical lost-item reports.
2. Data is grouped by route, station, and time buckets.
3. Predictive agent identifies high-risk patterns and anomalies.
4. Backend stores hotspot summaries for dashboard consumption.
5. Operator dashboard displays risk-ranked hotspots.

## Outputs
- Daily/weekly hotspot summaries
- Route/station risk levels
