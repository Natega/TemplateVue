console.log(process.env)
export default {
    janrainUrl: process.env.VUE_APP_JANRAIN_URL || "default_url",
} as {
    janrainUrl: string
}