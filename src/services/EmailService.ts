interface IMailTo {
 name: string;
 email: string;
}
interface IMailMessage {
 subject: string;
 body: string;
 attachement ?: string[];
}
interface IMessageDTO {
 to: IMailTo;
 message: IMailMessage;
}
interface IMailService {
 sendMail(request: IMessageDTO): void;
}
// Data Trasfer Data

class EmailService implements IMailService {
 sendMail({to, message} : IMessageDTO) {
  console.log(`Email enviado para ${to.name}: ${message.subject}`);
 }
}

export default EmailService;