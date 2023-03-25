import * as yup from "yup";

const Regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;

const rnombre: RegExp = /^[A-Z][a-z]+$/;

export const validation = yup.object().shape({
	name: yup
		.string()
		.matches(rnombre, "invalid name")
		.required("Name is required"),
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Email is required"),
	password: yup
		.string()
		.min(4)
		.matches(Regex, { message: "Please create a stronger password" })
		.required("Password is required"),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password")], "Password must match")
		.required("Please confirm your password"),
});


/* 
	Personalmente me hubise gustado que las validaciones las hubises realizado tu,
	para ver tu nivel de react en ese aspecto y no a traves de una libreria, pero bueno.
	A concecuencia de haber utilizado esta libreria, al menos yo no pude acceder nunca
	a la pagina de MainC, xq nunca me permitio logearme, siempre me decia que necesitaba una 
	contraseña mas potente y no importa lo que pusiese no me dejaba pasar,
	otro error es que no me deja ver la contraseña que puse, siempre salen los puntitos,
	este error es de estilos no de react a consecuencia, error tuyo.
	

*/
