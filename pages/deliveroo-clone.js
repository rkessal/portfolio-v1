import ProjectShowcase, {
  ProjectDescriptionText,
  ProjectPresentationText,
} from "components/projectShowcase";
import Project from "layouts/project";
import Section from "layouts/section";
import Link from "next/link";
import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";

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
            Ce projet est un clone de l'application "Deliveroo", développé avec
            React Native, une appliation de livraison de plat à domicile.
          </ProjectPresentationText>
          <ProjectDescriptionText title="Sanity">
            Les restaurants, les plats ainsi que les catégories mises en avant
            sont affichés grâce a Sanity avec des requêtes GROQ. C'est donc un
            affichage dynamique.
          </ProjectDescriptionText>
          <ProjectDescriptionText>
            Chaque schema de document (Restaurant, Dishes et Featured Category)
            possède un nom, un type, un titre et des champs.
          </ProjectDescriptionText>
          <CopyBlock
            text={codeSanity}
            language="jsx"
            showLineNumbers={false}
            wrapLines
            theme={dracula}
          />
          <ProjectDescriptionText title="Redux">
            Redux centralise les "states" de l'application, ce qui permet d'être
            mieux organisé et facilite aussi le debuggage.
          </ProjectDescriptionText>
          <ProjectDescriptionText>
            Je l'ai utilisé pour afficher le panier et les infos du restaurant.
          </ProjectDescriptionText>
          <CopyBlock
            text={codeReduxBasket}
            language="jsx"
            showLineNumbers={false}
            wrapLines
            theme={dracula}
          />
          <CopyBlock
            text={codeReduxDishRow}
            language="jsx"
            showLineNumbers={false}
            wrapLines
            theme={dracula}
          />
          <ProjectDescriptionText title="Tailwind">
            Enfin pour le style de l'affichage, Tailwind permet d'être beaucoup
            plus rapide. Pour React Native, il faudra utiliser{" "}
            <Link href="https://www.nativewind.dev/">
              <a className="underline text-redMain">Native Wind</a>
            </Link>
            .
          </ProjectDescriptionText>
        </ProjectShowcase>
      </Section>
    </Project>
  );
}

const codeSanity = `// .../schemas/dish.js
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

const codeReduxDishRow = `// .../components/DishRow.js
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

const codeReduxBasket = `// .../features/basketSlice.js 
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
