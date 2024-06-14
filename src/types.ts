export type TypeInput = 'input' | 'textarea' | 'select';

type Rules = {
  name: string,
  digit?: number,
};

export type DinamicData = {
  name: string,
  label: string,
  value?: string,
  rules?: Rules[],
  typeInput?: TypeInput,
  options?: Record<string, unknown>[],
  optionValue?: string,
  optionLabel?: string,
  misc?: Record<string, unknown>,
};

export type PropsDinamicForm = {
  dinamicform: DinamicData[],
  columns?: number,
  title?: string,
  buttonlabel?: string,
};
