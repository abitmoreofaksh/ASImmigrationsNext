import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
  return (
    <section class="py-8">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
          <div class="w-full lg:w-2/5">
            <span class="text-sm text-gray-500 font-medium mb-4 block">
              Testimonials
            </span>
            <h2 class="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-8">
              Our Alumni's&nbsp;
              <span class=" text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-800">
                Feedback
              </span>
            </h2>
          </div>
          <div class="w-full lg:w-3/5">
            <InfiniteMovingCards items={testimonials} speed="slow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
