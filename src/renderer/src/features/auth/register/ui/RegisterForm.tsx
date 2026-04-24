"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, TypeRegisterSchema } from "@/entities/user";
import { InputField, LinkUnderline } from "@/shared/ui";
import { cn } from "@/shared/lib/utils";
import { useLoginStore } from "../../model/login-store";
import { ButtonAuth } from "../../ui";
import { toast } from "sonner";
import { JSX } from "react";
import { useNavigate } from "react-router";

export const RegisterForm = (): JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch,
	} = useForm<TypeRegisterSchema>({
		resolver: zodResolver(registerSchema),
	});
	const { register: registerUser, isLoading } = useLoginStore();
	const navigate = useNavigate();

	const onSubmit = async (data: TypeRegisterSchema): Promise<void> => {
		try {
			const resultMessage = await registerUser(data);

			toast.success(resultMessage ?? "Регистрация прошла успешно!");

			navigate("/login");
		} catch (error) {
			const errorMessage =
				error instanceof Error
					? error.message
					: "Произошла ошибка при регистрации. Попробуйте позже.";

			toast.error(errorMessage);

			reset();
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={cn(
				`flex flex-col gap-y-[clamp(30px,3vh,40px)] p-10 mx-auto w-[min(100%,550px)] bg-accent-bg shadow-box rounded-xl`,
			)}
		>
			<div className="flex flex-col gap-y-2.5 pb-5 items-center relative rounded-xl">
				<div
					className="absolute inset-x-2 bottom-0 h-0.5 pointer-events-none opacity-40"
					style={{
						background:
							"linear-gradient(to right, transparent, var(--primary-color), transparent)",
					}}
				/>

				<h2 className="text-[clamp(28px,2.4vw,32px)] relative z-10">
					Регистрация
				</h2>
				<p className="text-[clamp(14px,1.4vw,16px)] relative z-10">
					Введите свои данные
				</p>
			</div>

			<div className="flex flex-col gap-y-[calc(clamp(30px,3vh,40px)+24px)] pt-5">
				<InputField
					type="email"
					register={register("email")}
					placeholder="Почта"
					error={errors}
					name="email"
					watch={watch}
					autocomplete="email"
				/>

				<InputField
					type="text"
					register={register("name")}
					placeholder="Имя"
					error={errors}
					name="name"
					watch={watch}
					autocomplete="name"
				/>

				<InputField
					type="password"
					register={register("password")}
					placeholder="Пароль"
					error={errors}
					name="password"
					watch={watch}
					autocomplete="current-password"
				/>
			</div>

			<p className="ml-auto">
				Уже есть аккаунт? <LinkUnderline title="Войти" link="/login" />
			</p>

			<ButtonAuth>
				{isLoading ? "Регистрация..." : "Зарегистрироваться"}
			</ButtonAuth>
		</form>
	);
};
