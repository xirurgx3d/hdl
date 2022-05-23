import axios from "axios";

export async function sendInfoToCRM(params: any) {

        const crmUrl = 'send-form';
        return axios({
            method: 'post',
            url: crmUrl,
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                name: params.name,
                phone: params.phone,
                comment: params.comment,
            },
        }).then(
            (response) => {
                console.log(response)
                return {
                    data: response.data,
                    error: 0,
                }
            },
            (response) => {
                return { error: 1 };
            },
        );
}
