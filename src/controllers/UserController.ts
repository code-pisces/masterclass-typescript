import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "Gustavo", email: "gustavo@email.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { name: "Gustavo", email: "umemailai@cara.com" },
      message: { subject: "Bemvindo ao sistema", body: "Seja bem-vido" },
    });
    return res.send();
  },
};
