import { FoundItem, LostItemReport, MatchResult } from "./types";

// Mock API contracts for SmartFind; replace with real service contracts.
export enum SmartFindEndpoints {
  SubmitLostReport = "/api/v1/lost-reports",
  ListFoundItems = "/api/v1/found-items",
  RunMatch = "/api/v1/matching/run",
  GetHotspots = "/api/v1/analytics/hotspots",
}

export interface SubmitLostReportRequest {
  report: Omit<LostItemReport, "id" | "status">;
}

export interface SubmitLostReportResponse {
  report: LostItemReport;
}

export interface ListFoundItemsResponse {
  items: FoundItem[];
}

export interface RunMatchResponse {
  matches: MatchResult[];
}

export interface Hotspot {
  routeOrStation: string;
  incidentCount: number;
  riskLevel: "low" | "medium" | "high";
}

export interface GetHotspotsResponse {
  hotspots: Hotspot[];
}
