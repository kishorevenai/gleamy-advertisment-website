"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const corsOptions_1 = require("./config/corsOptions");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3600;
app.use((0, cors_1.default)(corsOptions_1.corsOptions));
app.use(express_1.default.json());
//@ts-ignore
app.post("/api/contact", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, message } = req.body;
    try {
        const inquiry = yield prisma.inquiry.create({
            data: {
                name,
                email,
                message,
            },
        });
        return res.status(200).json({ message: "Inquiry saved", inquiry });
    }
    catch (error) {
        console.error("Error saving inquiry:", error);
        return res.status(500).json({ error: "Something went wrong" });
    }
}));
//@ts-ignore
app.get("/api/get_all_inquiry", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma.inquiry.findMany({});
        return res.status(200).json({ message: "Inquiry saved", result });
    }
    catch (error) {
        return res.status(500).json({ error: "Something went wrong" });
    }
}));
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});
