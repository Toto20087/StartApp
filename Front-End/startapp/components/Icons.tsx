import Image from "next/image";

const Icons = () => {
    return (
    <section className="flex flex-row justify-center">
        <Image
            src={"/svg/apple.svg"}
            width={25}
            height={25}
            alt="Picture of the author"
        />
        <Image
            src={"/svg/google.svg"}
            width={25}
            height={25}
            alt="Picture of the author"
            className="mx-4"
        />
        <Image
            src={"/svg/facebook.svg"}
            width={25}
            height={25}
            alt="Picture of the author"
        />
    </section>
    )
}

export default Icons;