import { type infer as zInfer, object, email, string } from "zod";

const loginSchema = object({
	email: email("Неверный формат почты"),
	password: string().min(6, "Минимум 6 символов"),
});

type TypeLoginSchema = zInfer<typeof loginSchema>;

export { type TypeLoginSchema, loginSchema };
