import BlackBeansLogo from "./BlackBeansLogo";

export default function Title({text}) {
  return (
    <div className="flex flex-col items-center my-5">
      <h3 className="text text-2xl">{text}</h3>
      <BlackBeansLogo/>
    </div>
  )
}
