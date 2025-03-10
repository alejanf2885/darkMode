export default function CardPerson() {
  return (
    <div className="h-auto w-full max-w-[350px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] overflow-hidden rounded-lg bg-[#ebf3fe] dark:bg-[#4477CE] bg-opacity-20 p-6">
      <div className="flex h-full flex-col">
        <div className="relative h-64 w-full overflow-hidden rounded-lg">
          <img
            src="https://s3-alpha-sig.figma.com/img/6b09/3f68/6f5d207c371123279dd071e3836363a5?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GYOvE8PNm7J8uyluzOHTY7w4mBmJgjB6pzeu0Hv-hCvw492~y7rY0bNtmF1i~dXjgKHPDVru~-kxcjQTzT~bfh9aaqYis~wgNIgs80n96hvkUXsPZ7nX9CT8ReqsZfk2o0h7K3hT-8yFgYbSz0TqdqCQ9r038IS4COGretgq48mlJb2DhUaFBkW6JxgSDM7s5CM7i5-1t~tDO2toRWlU-VstyhJ9MzbCPMIL5M93-0oJpSgUXZ~5-ETrjE58p4b~faq4rwrPsvA~KkEN04KK4ftfJpKVb0C1qhUc3OZ1H7kSyzU0xg9MmCl0Ho9YY1LO~o9EYfyye5iobz5TxLY9oA__"
            alt="User profile"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
        <div className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <div className="font-semibold text-foreground">NAME:</div>
            <div className="text-muted-foreground">35</div>
            <div className="font-semibold text-foreground">AGE:</div>
            <div className="text-muted-foreground">Married, 2 Kids</div>
            <div className="font-semibold text-foreground">EDUCATION:</div>
            <div className="text-muted-foreground">University of Calgary</div>
            <div className="font-semibold text-foreground">LOCATION:</div>
            <div className="text-muted-foreground">Calgary, Alberta</div>
            <div className="font-semibold text-foreground">JOB:</div>
            <div className="text-muted-foreground">Family Physician</div>
            <div className="font-semibold text-foreground">HOBBIES:</div>
            <div className="text-muted-foreground">Hiking and dancing</div>
          </div>
        </div>
      </div>
    </div>
  );
}