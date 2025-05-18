// Компонент SkillBar отображает навык и его уровень в виде прогресс-бара
export default function SkillBar({ name, level }) {
    return (
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-white">{name}</span>
          <span className="text-sm text-gray-300">{level}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
          <div
            className="bg-green-500 h-2.5 rounded-full"
            style={{ width: level }}
          ></div>
        </div>
      </div>
    );
  }