import { useForm } from '@tanstack/react-form';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string().min(1),
});

const useLoginForm = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validators: {
      onChange: loginSchema,
    },
    onSubmit: async ({ value }) => {
      console.log('Logging in...', value);
    },
  });

  return form;
};


export default useLoginForm;

export type LoginFormType = ReturnType<typeof useLoginForm>;
