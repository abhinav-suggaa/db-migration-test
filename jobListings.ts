import {Router} from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.post("/", async (req,res) => {
    const jobListing = await prisma.jobListing.create({
        data: req.body,
    });

    res.json(jobListing);
});

router.get("/", async (req,res) => {
    return res.json(await prisma.jobListing.findMany());
});

export default router;