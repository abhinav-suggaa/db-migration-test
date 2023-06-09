import {Router} from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.post("/", async (req,res) => {
    const company = await prisma.company.create({
        data: req.body,
    });

    res.json(company);
});
