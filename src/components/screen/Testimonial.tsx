import { InfiniteMovingCards } from "../global/infinite-moving-card"

const testimonials = [
    {
        quote:
            "His contributions were paramount in implementing major changes in our manufacturing layout. An absolute gem of a person.",
        name: "Philips",
    },
    {
        quote:
            "His role in new product launches and optimizing space utilization was invaluable to our growth and success.",
        name: "Yazaki",
    }
];

const Testimonial = () => {
    return (
        <div className="lg:p-28 md:px-16 px-4 py-20 bg-card-foreground w-full h-full">
            <InfiniteMovingCards items={testimonials} />
        </div>
    )
}

export default Testimonial