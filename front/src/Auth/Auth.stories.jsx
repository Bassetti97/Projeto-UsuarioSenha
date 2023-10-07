import {Auth} from './Auth';

export default{
    title: 'Auth',
    component: Auth,

}

export const Normal = () => <Auth />

export const Autenticando = () => <Auth carregando={true} />