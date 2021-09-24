import { Button, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { HeaderHome } from "../../components/HeaderHome";

type SingInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

/**
 * Fazer login do usuário
 * @author ArthurBernardoDev
 * @param SingInFormData
 * @returns void
 */
export default function Login() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SingInFormData> = async (values, event) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Flex direction="column" h="100vh">
      <HeaderHome />
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          w="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
            <Input
              placeholder="Digite seu email"
              name="email"
              type="email"
              label="E-mail"
              error={errors.email}
              {...register("email")}
            />

            <Input
              placeholder="Digite sua senha"
              name="password"
              type="password"
              label="senha"
              error={errors.password}
              {...register("password")}
            ></Input>
          </Stack>

          <Button
            type="submit"
            mt="6"
            bg="white"
            color="gray.azul"
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
          <Text mt="4">
            Não tem uma conta?{" "}
            <Link href="/registrar" color="gray.300">
              Criar conta
            </Link>
          </Text>
          <Text mt="4">
            Esqueceu sua senha?
            <Link href="/registrar" color="gray.300">
              {" "}
              Clique Aqui
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
