import { PrismaClient } from '@prisma/client';


// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
    const post1 = await prisma.article.upsert({
        where: { 
            title: 'Latest Prisma Updates'
        },
        update: {},
        create: {
            title: 'Latest Prisma Updates',
            body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
            description:
                "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
            published: false,
        },
    });

    const post2 = await prisma.article.upsert({
        where: {
            title: "What's new in Prisma? (Q1/22)"
        },
        update: {},
        create: {
          title: "What's new in Prisma? (Q1/22)",
          body: 'Our engineers have been working hard, issuing new releases with many improvements...',
          description:
            'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
          published: true,
        },
    });
}


main()
.catch((e) => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
});
