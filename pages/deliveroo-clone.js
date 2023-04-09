import ProjectItemShowcase from "components/projectItemShowcase";
import ProjectShowcase, {
  ProjectDescriptionText,
  ProjectPresentationText,
} from "components/projectShowcase";
import Project from "layouts/project";
import Section from "layouts/section";
import Link from "next/link";
import { CopyBlock, atomOneLight } from "react-code-blocks";

export default function DeliverooClone() {
  const project = {
    id: 6,
    title: "Deliveroo Clone",
    stack: ["React Native", "Redux", "Sanity", "TailwindCSS"],
    links: [
      {
        repo: "https://www.github.com/rkessal/deliveroo-clone",
      },
    ],
  };

  return (
    <Project title="Deliveroo Clone" desc="Projet Deliveroo Clone">
      <Section>
        <ProjectShowcase
          title={project.title}
          desc={project.desc}
          stack={project.stack}
          links={project.links}
          key={project.id}
        >
          <ProjectPresentationText>
            Ce projet est un clone de l&apos;application &quot;Deliveroo&quot;,
            développé avec React Native, une application de livraison de plat à
            domicile.
          </ProjectPresentationText>
          <div className="grid md:grid-cols-2 gap-2 lg:gap-4">
            <ProjectItemShowcase
              src="https://res.cloudinary.com/dsmrg2vyw/video/upload/v1665776535/deliveroo-clone/deliveroo-vid_tzm3il.mp4"
              height={960}
              width={540}
              video
              mobile
            />

            <span className="hidden md:block">
              <ProjectItemShowcase
                src="https://res.cloudinary.com/dsmrg2vyw/image/upload/v1665776575/deliveroo-clone/IMG-20221014-WA0025_rgsyaq.jpg"
                width={1080}
                height={1920}
                mobile
              />
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-4">
            <ProjectItemShowcase
              src="https://res.cloudinary.com/dsmrg2vyw/image/upload/v1665776575/deliveroo-clone/IMG-20221014-WA0026_otikw6.jpg"
              width={1080}
              height={1920}
              mobile
            />
            <ProjectItemShowcase
              src="https://res.cloudinary.com/dsmrg2vyw/image/upload/v1665776575/deliveroo-clone/IMG-20221014-WA0028_kil9qw.jpg"
              width={1080}
              height={1920}
              mobile
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-4">
            <ProjectItemShowcase
              src="https://res.cloudinary.com/dsmrg2vyw/image/upload/v1665776575/deliveroo-clone/IMG-20221014-WA0030_xi1xkr.jpg"
              width={1080}
              height={1920}
              mobile
            />
            <ProjectItemShowcase
              src="https://res.cloudinary.com/dsmrg2vyw/image/upload/v1665776575/deliveroo-clone/IMG-20221014-WA0024_p176rs.jpg"
              width={1080}
              height={1920}
              mobile
            />
          </div>
          <ProjectDescriptionText title="Le projet">
            <p>
              Mon objectif était de fournir une expérience utilisateur similaire
              à celle de l&apos;application d&apos;origine, comprenant les
              fonctionnalités de sélection de restaurants, de plats et de
              catégories, l&apos;ajout d&apos;articles au panier, passer une
              commande et le suivi de l&apos;état de la livraison.
            </p>
          </ProjectDescriptionText>
          <ProjectDescriptionText title="Sanity">
            <p>
              L&apos;un des aspects clés de ce projet était d&apos;afficher
              dynamiquement les informations des restaurants, des plats et des
              catégories.
            </p>
            <p>
              J&apos;ai utilisé Sanity pour cela, avec des requêtes GROQ. Cela
              m&apos;a permis d&apos;avoir un affichage dynamique et mis à jour
              en temps réel.
            </p>
          </ProjectDescriptionText>
          <ProjectItemShowcase
            height={927}
            width={1920}
            src="https://res.cloudinary.com/dsmrg2vyw/image/upload/v1665777425/deliveroo-clone/Screenshot_2022-10-14_at_20-46-14_deliveroo-clone_Sanity_ejuge6.png"
          />
          <ProjectDescriptionText>
            <p>
              Chaque schéma de document (Restaurant, Dishes et Featured
              Category) possède un nom, un type, un titre et des champs.
            </p>
            <p>Par exemple, pour le schéma de document &quot;Dishes&quot; :</p>
          </ProjectDescriptionText>
          <CopyBlock
            text={codeSanity}
            language="js"
            showLineNumbers={false}
            wrapLines
            theme={atomOneLight}
          />
          <ProjectDescriptionText title="Redux">
            <p>
              Redux centralise les &quot;states&quot; de l&apos;application, ce
              qui permet d&apos;être mieux organisé et facilite aussi le
              debuggage.
            </p>
            <p>
              Je l&apos;ai utilisé pour afficher le panier et les infos du
              restaurant.
            </p>
          </ProjectDescriptionText>
          <CopyBlock
            text={codeReduxBasket}
            language="js"
            showLineNumbers={false}
            wrapLines
            theme={atomOneLight}
          />
          <CopyBlock
            text={codeReduxDishRow}
            language="jsx"
            showLineNumbers={false}
            wrapLines
            theme={atomOneLight}
          />
          <ProjectDescriptionText title="Tailwind">
            <p>
              {" "}
              Enfin pour le style de l&apos;affichage, Tailwind permet
              d&apos;être beaucoup plus rapide. Pour React Native, il faudra
              utiliser{" "}
              <Link href="https://www.nativewind.dev/">
                <a className="underline text-redMain-500">Native Wind</a>
              </Link>
              .
            </p>
          </ProjectDescriptionText>
        </ProjectShowcase>
      </Section>
    </Project>
  );
}

const codeSanity = `
 // .../schemas/dish.js
  export default {
    name: "dish",
    title: "Dish",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Dish's name",
        type: "string",
        validation: (rule) => rule.required(),
      },

      {
        name: "short_description",
        title: "short description",
        type: "string",
        validation: (rule) => rule.max(500),
      },
      {
        name: "price",
        title: "Dish's price",
        type: "number",
      },

      {
        name: "image",
        title: "Dish's image",
        type: "image",
      },
    ],
  };`;

const codeReduxDishRow = `
  // .../components/DishRow.js
  import { useDispatch, useSelector } from "react-redux";
  import {
    addToBasket,
    removeFromBasket,
    selectBasketItems,
    selectBasketItemsWithId,
  } from "../features/basketSlice";

  const DishRow = ({ id, name, description, price, image }) => {
    const items = useSelector((state) => selectBasketItemsWithId(state, id));
    const dispatch = useDispatch();

    const addItemToBasket = () => {
      dispatch(addToBasket({ id, name, description, price, image }));
    };

    const removeItemFromBasket = () => {
      if (!items.length > 0) return;

      dispatch(removeFromBasket({ id }));
    };

    return (
      <>
      ...
        <TouchableOpacity
          disabled={!items.length}
          onPress={removeItemFromBasket}
        >
          <MinusCircleIcon
            color={items.length > 0 ? "#00CCBB" : "gray"}
            size={40}
          />
        </TouchableOpacity>
        <Text>{items.length}</Text>
        <TouchableOpacity onPress={addItemToBasket}>
          <PlusCircleIcon color="#00CCBB" size={40} />
        </TouchableOpacity>
      ... 
      </>
    );
  };
`;

const codeReduxBasket = `
  // .../features/basketSlice.js 
  import { createSlice } from "@reduxjs/toolkit";

  const initialState = {
    items: [],
  };

  export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
      addToBasket: (state, action) => {
        state.items = [...state.items, action.payload];
      },
      removeFromBasket: (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );

        let newBasket = [...state.items];

        if (index >= 0) {
          newBasket.splice(index, 1);
        } else {
          console.warn(
            \`Can't remove product (id: \${action.payload.id}) as it's not in basket!\`
          );
        }

        state.items = newBasket;
      },
    },
  });

  // Action creators are generated for each case reducer function
  export const { addToBasket, removeFromBasket } = basketSlice.actions;

  export const selectBasketItems = (state) => state.basket.items;

  export const selectBasketItemsWithId = (state, id) =>
    state.basket.items.filter((item) => item.id === id);

  export const selectBasketTotal = (state) =>
    state.basket.items.reduce((total, item) => (total += item.price), 0);

  export default basketSlice.reducer;
`;
