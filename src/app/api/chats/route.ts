import { prisma } from "../../prisma/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
  const { message } = await request.json();
  const chat = await prisma.chats.create({
    data: {
      message
    }
  });

  return NextResponse.json(chat);
}

export async function GET(_request: NextRequest) {
  const chats = await prisma.chats.findMany({
    orderBy: {
      created_at: 'asc'
    },
  });

  return NextResponse.json(chats);
}