import React from "react";
import CareersHero from "./BlogComponents/CareersHero";
import BlogList from "./BlogComponents/BlogList";
import BlogPostPreview from "./BlogComponents/BlogPostPreview";
import CategoriesList from "./BlogComponents/CategoriesList";
import PopularPosts from "./BlogComponents/PopularPosts";
import SearchBar from "./BlogComponents/SearchBar";
import SubscribeSection from "./BlogComponents/SubscribeSection";

const Careers = () => {
  return (
    <main>
      <CareersHero />
      <SearchBar />
      <CategoriesList />
      <BlogList />
      <BlogPostPreview />
      <PopularPosts />
      <SubscribeSection />
    </main>
  );
};

export default Careers;
