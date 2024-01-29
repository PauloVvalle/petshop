import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChangeEvent, FC, InputHTMLAttributes } from 'react';

interface InputImgProps extends InputHTMLAttributes<HTMLInputElement> {
  imageFile?: File;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputImg: FC<InputImgProps> = ({ imageFile, onChange, ...props }) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" onChange={onChange} {...props} />
    </div>
  )
}

// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { ChangeEvent, FC, InputHTMLAttributes } from 'react';

// interface InputImgProps extends InputHTMLAttributes<HTMLInputElement> {
//   value?: string;
//   onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
// }

// export const InputImg: FC<InputImgProps> = ({ value, onChange, ...props }) => {
//   return (
//     <div className="grid w-full max-w-sm items-center gap-1.5">
//       <Label htmlFor="picture">Picture</Label>
//       <Input id="picture" type="file" value={value} onChange={onChange} {...props} />
//     </div>
//   )
// }
