import { defineField } from 'sanity';

const socios = {
  name: 'socios',
  title: 'Sócios',
  type: 'document',
  fields: [
    defineField({
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'associacao',
      title: 'Associação',
      type: 'reference',
      to: [{ type: 'associacao' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'anual',
      title: 'Anual?',
      type: 'boolean',
      initialValue: false,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'discount',
      title: 'Desconto',
      type: 'number',
      initialValue: 0,
      validation: Rule => Rule.required().min(0),
    }),
    defineField({
      name: 'adults',
      title: 'Adultos',
      type: 'number',
      initialValue: 1,
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
      validation: Rule => Rule.required().min(0),
    }),
  ],
};

export default socios;