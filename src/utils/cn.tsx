import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// import clsx, { ClassValue } from "clsx";: Dòng này import clsx và ClassValue từ thư viện clsx. clsx là một thư viện phổ biến được sử dụng để kết hợp các lớp CSS một cách linh hoạt trong React. ClassValue là một kiểu dữ liệu được sử dụng bởi clsx để đại diện cho một hoặc nhiều lớp CSS.

// import { twMerge } from "tailwind-merge";: Dòng này import hàm twMerge từ thư viện "tailwind-merge". twMerge là một hàm được sử dụng để kết hợp và định dạng các lớp CSS trong Tailwind CSS.

// export function cn(...inputs: ClassValue[]): Đây là một hàm cn được xuất ra ngoài để sử dụng. Hàm này nhận một số lượng không xác định các tham số (...inputs) với mỗi tham số là một ClassValue.

// return twMerge(clsx(inputs)): Hàm cn này kết hợp các đầu vào của nó bằng cách sử dụng clsx và sau đó sử dụng twMerge để kết hợp và định dạng các lớp CSS bằng cách sử dụng Tailwind CSS. Kết quả cuối cùng của hàm cn sẽ là một chuỗi lớp CSS đã được định dạng đúng cách.

// Tóm lại, hàm cn này là một cách tiện lợi để kết hợp và định dạng các lớp CSS trong dự án Next.js của bạn, kết hợp giữa khả năng linh hoạt của clsx và sức mạnh của Tailwind CSS thông qua twMerge.
