import { EmailMessage } from "cloudflare:email";
import { createMimeMessage } from "mimetext";

interface Env {
  SEND_EMAIL: { send(message: EmailMessage): Promise<void> };
}

export default {
  async email(message: ForwardableEmailMessage, env: Env, _ctx: ExecutionContext) {
    await message.forward("nirmalkarthikeyan1@gmail.com");

    const msg = createMimeMessage();
    msg.setSender({ name: "Portfolio Mail", addr: "mailer@nirmalkarthikeyan.com" });
    msg.setRecipient("nirmalkarthikeyan1@gmail.com");
    msg.setSubject("New email received");
    msg.addMessage({
      contentType: "text/plain",
      data: `New email from ${message.from}`,
    });

    await env.SEND_EMAIL.send(
      new EmailMessage("mailer@nirmalkarthikeyan.com", "nirmalkarthikeyan1@gmail.com", msg.asRaw())
    );
  },
};
