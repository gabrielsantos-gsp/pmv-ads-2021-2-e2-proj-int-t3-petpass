import { Button, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { Input } from '../components/Form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Header } from "../components/Header";
import { HeaderHome } from "../components/HeaderHome";

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    dataDeNascimento: string;
    password_confirmation: string;

}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    dataDeNascimento: yup.string().required('Data de nascimento obrigatória').min(6, 'Exemplo: 15/09/2002'),
    password: yup.string().required('Senha obrigatória').min(6, "No mínimo 6 caracteres"),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], "As senhas precisam ser iguais teste")
})


/**
 * Registrar um novo usuário
 * @author ArthurBernardoDev
 * @param CreateUserFormData 
 * @returns void
 */
export default function CreateUser() {

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserFormSchema)
    })

    const { errors } = formState

    const handleSignIn: SubmitHandler<CreateUserFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(values)
    }

    return (
        <Flex direction="column" h="100vh">
            <HeaderHome />

            <Flex
                w="100vw"
                h="100vh"
                align="center"
                justify="center"
            >
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
                            placeholder="Digite seu nome"
                            name="name"
                            type="name"
                            label="Nome"
                            error={errors.name}
                            {...register('name')}
                        />
                        <Input
                            placeholder="Digite seu email"
                            name="email"
                            type="email"
                            label="E-mail"
                            error={errors.email}
                            {...register('email')}
                        />
                        <Input
                            placeholder="Digite sua data de nascimento"
                            name="dataDeNascimento"
                            type="dataDeNascimento"
                            label="Data de nascimento"
                            error={errors.dataDeNascimento}
                            {...register('dataDeNascimento')}
                        />

                        <Input
                            placeholder="Digite sua senha"
                            name="password"
                            type="password"
                            label="Senha"
                            error={errors.password}
                            {...register('password')}
                        />
                        <Input
                            placeholder="Digite sua senha"
                            name="password_confirmation"
                            type="password"
                            label="Confirmarção de senha"
                            error={errors.password_confirmation}
                            {...register('password_confirmation')}
                        />

                    </Stack>

                    <Button type="submit" mt="6" bg="white" color="gray.azul" size="lg" isLoading={formState.isSubmitting}>
                        Criar conta
                    </Button>
                    <Text mt="4">Já criou sua conta? <Link href="/login" color="gray.300">Entrar com sua conta</Link></Text>
                </Flex>
            </Flex>
        </Flex>
    )
}