import { cn } from "@/utils/cn";
import React from "react";
import { IoSearch } from "react-icons/io5";

type Props = {
  className?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

export default function SearchBox(props: Props) {
  return (
    <form
      onSubmit={props.onSubmit}
      className={cn("flex relative items-center justify-center h-10 ",props.className)}
    >
      <input
        onChange={props.onChange}
        value={props.value}
        type="text"
        name=""
        id=""
        placeholder="Nhập địa điểm"
        className="px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:outline-none  focus:border-blue-500 h-full"
      />
      <button
        type="button"
        className="px-4 py-[9px] bg-blue-500  text-white focus:outline-none hover:bg-blue-600 whitespace-nowrap h-full"
      >
        <IoSearch />
      </button>
    </form>
  );
}

// px-4: Đây là lớp để thiết lập padding theo chiều ngang (horizontal) cho phần tử. px là viết tắt của "padding-x", và 4 là giá trị của padding, trong trường hợp này là 4 đơn vị (pixels). Điều này tạo ra một khoảng cách 4 pixels ở cả hai bên trái và phải của phần tử.

// py-[9px]: Đây là lớp để thiết lập padding theo chiều dọc (vertical) cho phần tử. py là viết tắt của "padding-y", và [9px] là một biểu thức để thiết lập kích thước padding dọc. Trong trường hợp này, giá trị là 9 pixels.

// bg-blue-500: Đây là lớp để thiết lập màu nền của phần tử. bg là viết tắt của "background", và blue-500 chỉ định màu nền là một biến thể của màu xanh (blue) từ bảng màu của Tailwind CSS, với mức độ sâu của màu là 500. Điều này tạo ra một màu nền xanh đậm.

// text-white: Đây là lớp để thiết lập màu chữ của phần tử. text là viết tắt của "text color", và white chỉ định màu chữ là trắng.

// focus:outline-none: Đây là lớp để loại bỏ viền xung quanh phần tử khi phần tử đang được tập trung (focus). Điều này giúp tạo ra một giao diện sạch sẽ hơn khi người dùng tương tác với phần tử.

// hover:bg-blue-600: Đây là lớp để thiết lập màu nền của phần tử khi con trỏ chuột hover qua phần tử. Tương tự như bg-blue-500, nhưng với một biến thể của màu xanh khác (màu xanh 600) để tạo ra một hiệu ứng hover.

// whitespace-nowrap: Đây là lớp để đảm bảo rằng phần tử không gặp trở ngại khi bị tràn ra ngoài (overflow) theo chiều ngang. Trong trường hợp này, nó loại bỏ bất kỳ khoảng trắng trống nào và giữ nội dung trong cùng một dòng.

// h-full: Đây là lớp để thiết lập độ cao của phần tử bằng độ cao của phần tử cha của nó. h là viết tắt của "height", và full chỉ định rằng phần tử sẽ có độ cao tối đa, điều này đảm bảo rằng phần tử sẽ điền vào chiều cao của phần tử cha của nó.
