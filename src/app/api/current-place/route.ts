import { NextResponse } from "next/server";
import { GeoIP, GetCurrentLocation } from "@/lib/location/GetCurrentLocation";


export async function GET() {
  const token: string = process.env.LOCATION_TOKEN ?? '';
  const currentPlace: GeoIP = await GetCurrentLocation();

  return NextResponse.json(currentPlace);
}