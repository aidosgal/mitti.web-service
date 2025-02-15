export default function ProblemStatement() {
  return (
    <div className="p-5 border-l h-full border-gray-800">
      <div className="text-xl">1. Hello World | Привет Мир</div>
      <div className="flex mt-2">
        <div className="bg-green-500 text-white px-4 py-2 text-sm">
          Легкий
        </div>
      </div>
      <div className="mt-5">
        <div>Напишите функцию, которая возвращает строку "Hello, World!"</div>
      </div>
      <div className="mt-5">
        <div>Примеры:</div>
        <div className="mt-2">
          <div>helloWorld() ➞ "Hello, World!"</div>
        </div>
      </div>
      <div className="mt-5">
        <div className="text-sm text-gray-400">Примечание:</div>
        <div className="ml-2 text-sm">
          <div>Не забудьте включить возвращаемое значение.</div>
        </div>
      </div>
      <div className="mt-5 flex items-center text-sm p-5">
        <div className="w-full text-gray-400 cursor-pointer text-center">Получить консультацию</div>
        <div className="w-full bg-white text-black text-center py-2 cursor-pointer">Следущая задача</div>
      </div>
    </div>
  );
}
