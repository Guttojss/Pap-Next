import { defineField } from 'sanity';

const review = {
  name: 'review',
  title: 'Review',
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
      name: 'text',
      title: 'Review Text',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'userRating',
      title: 'User Rating',
      type: 'number',
      validation: Rule =>
        Rule.required().min(1).max(5).error('Avalie entre 1 e 5'),
    }),
  ],
};

export default review;