interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 아래 type들에 마우스 올려보면 어떻게 변경되었는지 확인 가능!!

// 1. Partial 타입 => 내용 전부 ?타입(있어도 되고 없어도 되고) 만듦
type aaa = Partial<IProfile>;

// 2. Required 타입 => 내용 전부 있어야 되는걸로 만듦
type bbb = Required<IProfile>;

// 3. Pick 타입 => 필요한것만 가져다 만듦
type ccc = Pick<IProfile, "name" | "age">;

// 4. Omit 타입 => 필요없는것 제외해서 만듦
type ddd = Omit<IProfile, "school">;

// 5. Record 타입
type eee = "철수" | "영희" | "훈이"; // Union 타입 => 지정해놓은것만 대입 가능
let child1: eee = "철수"; // => eee에 지정해놓은 것 (철수,영희.훈이)만 됨
let child2: string = "사과"; // => 아무거나(철수,영희,사과,바나나)다 됨

type fff = Record<eee, number>; // Record 타입 => eee의 내용들의 타입을 정의해줌
type ffff = Record<eee, IProfile>;

// 6. 객체의 key들로 Union 타입 만들기
type ggg = keyof IProfile; // = "name" | "age" | "school" | "hobby"
let myprofile: ggg = "hobby";

// 7. type vs interface 차이    => interface는 선언병함 가능
interface IProfile {
  candy: number; // 선언 병합으로 추가됨
}

// 8. 배운것 응용 => candy만 쓰면 나머지 필수입력 없어서 에러나니깐 Partial씀
let profile: Partial<IProfile> = {
  candy: 10,
};

// ++ 특정한 녀석 ?타입으로 바꾸기
interface AAAAAAA extends Omit<IProfile, "school"> {
  school?: string;
}
