import { signUpHandler } from 'next-auth-sanity';

import sanityClient from '../../../components/libs/sanity';

export const POST = signUpHandler(sanityClient);