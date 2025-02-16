export async function addEmail(email) {
    const obj = {
        email
    }
    try {
        const response = await fetch('https://coderways-landing-backend.vercel.app/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        if (!response.ok) {
            const textError = await response.text()
            throw new Error(textError)
        }
        const data = await response.json()
        return data;
    } catch(error) {
        throw new Error(error)
    }
}