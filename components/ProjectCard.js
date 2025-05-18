// Компонент ProjectCard отображает информацию о проекте
export function ProjectCard({ title, description, tech }) {
    return (
      <div className="bg-gray-800 p-4 rounded-xl shadow-md mb-4">
        <h3 className="text-xl font-bold text-green-400 mb-2">{title}</h3>
        <p className="text-gray-300 mb-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="bg-green-600 text-white px-2 py-1 text-xs rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }