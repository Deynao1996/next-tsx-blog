import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

export default function SinglePostPage() {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="h-[500px] w-full">
          <div className="w-full h-full border border-border"></div>
        </div>
        <div className="col-span-2 space-y-8">
          <div className="scroll-m-20 text-4xl font-extrabold max-w-full">
            Another Story
          </div>
          <div className="flex items-center gap-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-light text-muted-foreground">Author</p>
              <span>Daniel Rivera</span>
            </div>
            <div>
              <p className="text-sm font-light text-muted-foreground">Author</p>
              <span>08.12.1212</span>
            </div>
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            numquam sunt ut voluptas officia nam nostrum itaque optio! Porro
            alias aspernatur accusantium, dolores non eos illum quaerat
            consectetur rerum esse ducimus ratione quibusdam expedita quae.
            Maiores aut nulla fugiat laboriosam facilis maxime dolore eos,
            placeat harum laborum vel autem sequi rem natus commodi reiciendis
            suscipit eligendi dolor quod asperiores illo! Quisquam, tempora
            explicabo? Perspiciatis, officiis. Placeat facere veniam veritatis
            dignissimos facilis quas repellendus quia tempore dolor. Tempora
            laboriosam, quis atque hic reiciendis quo accusantium consectetur
            eos illum quidem voluptatum maiores voluptatibus ut dolores
            blanditiis sit? Illo voluptate pariatur voluptatibus corporis, iure
            tempora, nemo quod omnis doloremque consequuntur quos praesentium,
            eligendi dolor! Nostrum autem, id debitis illum cupiditate laborum
            harum quibusdam aperiam, voluptate voluptatum dolor voluptatem
            explicabo quidem provident nobis ipsum alias. Amet blanditiis cum
            commodi? Aliquam, harum veniam. Iste deleniti quasi modi officia
            beatae. Ut ducimus tenetur eveniet aliquid natus eaque qui facilis,
            suscipit temporibus inventore beatae sed aliquam repellat
            consectetur debitis doloremque ipsa similique animi omnis aspernatur
            explicabo minus vel. Dolorem, minus quidem, inventore repellendus
            delectus recusandae reiciendis esse at aliquid autem illo
            voluptatibus iusto possimus. Animi voluptatibus dolorum soluta et
            incidunt adipisci neque tempora officiis, vel, quis consequatur?
          </p>
        </div>
      </div>
    </section>
  )
}
