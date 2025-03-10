export default function CardText() {
  return (
    <div className="h-auto w-full max-w-[350px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] overflow-hidden rounded-lg bg-[#ebf3fe] dark:bg-[#4477CE] bg-opacity-20 p-6">
      <h2 className="mb-4 text-xl font-semibold text-foreground">Bio</h2>
      <div className="h-[200px] overflow-y-auto">
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet mauris enim, vel condimentum risus
          eget rhoncus, vitae. Viverra pulvinar cras eu ac sed nunc dui. Risus pharetra, lacus interdum quam.
          Egestas aliquam dui at prom. Amet, pharetra, scelerisque molestie nibh porttitor sem malesuada cursus
          eget. Orci.
        </p>
      </div>
    </div>
  );
}