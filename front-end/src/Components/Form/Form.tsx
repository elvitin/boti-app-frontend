import React, { useState } from 'react';

interface FormData {
    name: string;
    surname: string;
    birth: any;
}

const Form: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        surname: '',
        birth: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const queryParams = new URLSearchParams();
        for (const key in formData) {
            queryParams.append(key, (formData as any)[key]);
        }
        const url = `/api/fake-submit-form?${queryParams.toString()}`;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Formulário enviado com sucesso');
                } else {
                    throw new Error('Erro ao enviar o formulário');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Preencha seus dados:</h1>
            <label>
                Nome:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Sobrenome:
                <input type="email" name="surname" value={formData.surname} onChange={handleChange} />
            </label>
            <label>
                Data de nascimento:
                <input type="date" name="data" value={formData.birth} onChange={handleChange} />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Form;
