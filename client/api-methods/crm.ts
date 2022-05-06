import axios from "axios";

export async function sendInfoToCRM(params: any) {

        const crmUrl = 'https://domoplaner.ru/dc-api/api/leads/?apikey=repfjrqAkdXjFjRSRDHRCxNpVtWrxDc6NYxcMJaGhcvnQaMY';
        return axios({
            method: 'post',
            url: crmUrl,
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                name: params.name,
                phone: params.phone,
                project_id: 99,
                comment: params.comment,
            },
        }).then(
            (response) => {
                return {
                    data: response.data,
                    error: 0,
                };
            },
            (response) => {
                return { error: 1 };
            },
        );
}
