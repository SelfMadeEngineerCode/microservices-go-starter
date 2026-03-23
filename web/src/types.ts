export type ItemCategory =
  | "electronics"
  | "wallet"
  | "bag"
  | "documents"
  | "clothing"
  | "other";

export interface LostItemReport {
  id: string;
  passengerId: string;
  category: ItemCategory;
  description: string;
  lastSeenRoute?: string;
  lastSeenStation?: string;
  lostAt?: string;
  status: "submitted" | "matching" | "matched" | "closed";
}

export interface FoundItem {
  id: string;
  source: "station_desk" | "vehicle_operator" | "depot";
  description: string;
  foundAt: string;
  route?: string;
  station?: string;
}

export interface MatchResult {
  reportId: string;
  foundItemId: string;
  confidence: number;
  rationale: string;
}
