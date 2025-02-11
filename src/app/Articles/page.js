import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {Fade} from 'react-awesome-reveal'; // Import Fade animation from react-reveal
import Footer from "@/components/Footer";
const ArticlesPage = () => {
    const articles = [
        {
          title: "Getting Started with Machine Learning: A Beginner's Guide",
          description: "Key concepts and first steps for ML beginners.",
          content: `Machine Learning can seem overwhelming at first, but breaking it down into fundamental concepts makes it more approachable. Start by building a strong foundation in mathematics, particularly linear algebra, calculus, and statistics. These form the backbone of ML algorithms and help you understand the underlying principles.
      
          Python is the go-to programming language for ML, thanks to its extensive libraries like NumPy, Pandas, and Scikit-learn. Begin with data preprocessing and visualization using these tools. Understanding how to clean, transform, and analyze data is crucial as real-world data is rarely perfect.
      
          Focus on supervised learning initially, working with classification and regression problems. Start with simpler algorithms like linear regression and logistic regression before moving to more complex models. Practice with public datasets from Kaggle or UCI Machine Learning Repository to gain hands-on experience. Remember, the key to mastering ML is practicing consistently and building projects that solve real problems.`,
          link: "https://learn-ml-basics.com"
        },
        {
          title: "Understanding Neural Networks and Deep Learning",
          description: "Breaking down neural networks and deep learning.",
          content: `Neural networks are powerful tools that form the foundation of modern deep learning. At their core, they're inspired by the human brain's structure, using interconnected nodes (neurons) organized in layers to process information. The key to understanding neural networks lies in grasping how these layers transform input data through weights and activation functions.
      
          Start by learning about perceptrons, the simplest form of neural networks. Then progress to multilayer networks, understanding concepts like backpropagation and gradient descent. These mechanisms allow networks to learn from their mistakes and improve over time. Pay special attention to activation functions like ReLU and sigmoid, as they introduce non-linearity crucial for modeling complex patterns.
      
          Frameworks like TensorFlow and PyTorch make implementing neural networks more accessible. Begin with simple architectures and gradually experiment with different layer types and configurations. Understanding concepts like overfitting, regularization, and dropout will help you build more robust models.`,
          link: "https://deep-learning-guide.edu"
        },
        {
          title: "Data Preprocessing and Feature Engineering",
          description: "Key steps to prepare data for ML models.",
          content: `Data preprocessing and feature engineering are often the most time-consuming yet crucial steps in any machine learning project. Good features can make a simple model perform excellently, while poor data preparation can make even the most sophisticated algorithms fail. Start by learning common preprocessing techniques like handling missing values, encoding categorical variables, and scaling numerical features.
      
          Feature engineering requires both domain knowledge and creativity. Learn to create meaningful features by combining existing ones, extracting information from text or dates, and handling temporal data. Understanding techniques like one-hot encoding, feature scaling, and dimensionality reduction is essential. Tools like Pandas and Scikit-learn provide robust functionality for these tasks.
      
          Practice detecting and handling outliers, implementing cross-validation, and splitting data appropriately. These skills ensure your models generalize well to new data. Remember that different models may require different preprocessing approaches, so understanding the relationship between data preparation and model performance is crucial.`,
          link: "https://feature-engineering-101.com"
        },
        {
          title: "Model Evaluation and Deployment",
          description: "Testing and deploying ML models effectively.",
          content: `Successfully deploying machine learning models requires thorough evaluation and understanding of production environments. Learn various metrics for model evaluation - accuracy, precision, recall, F1-score for classification; MSE, MAE, R-squared for regression. Understanding when to use each metric is crucial as different problems require different evaluation approaches.
      
          Cross-validation helps assess model performance more reliably than a single train-test split. Learn about k-fold cross-validation and its variations. Understanding concepts like bias-variance tradeoff helps in model selection and hyperparameter tuning. Tools like MLflow and Weights & Biases help track experiments and model versions.
      
          For deployment, learn about model serialization, API development using Flask or FastAPI, and containerization with Docker. Understanding cloud platforms like AWS, GCP, or Azure is valuable for scaling ML applications. Consider aspects like model monitoring, updating, and maintaining performance in production environments.`,
          link: "https://ml-deployment-guide.dev"
        }
      ];
      
  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Fade top> {/* Add fade animation to the title */}
          <h1 className="text-6xl text-center font-bold text-[#329D36] mb-8">
            Machine Learning Articles
          </h1>
          <p className="text-white text-center text-4xl mb-12">
            Curated articles and resources to help you begin your journey in Machine Learning and AI.
          </p>
        </Fade>

        <div className="space-y-8"> {/* Stack cards vertically with spacing */}
          {articles.map((article, index) => (
            <Fade bottom key={index}> {/* Add fade animation to each card */}
              <Card className="bg-gray-800 hover:shadow-lg transition-shadow duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-[#329D36] text-center text-3xl font-black">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-white text-xl text-center">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="prose text-white">
                    <p className="mb-4 text-xl">{article.content}</p>
                    <a 
                      href={article.link}
                      className="text-[#329D36] hover:text-[#329D36]/80 font-medium inline-flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more →
                    </a>
                  </div>
                </CardContent>
              </Card>
            </Fade>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ArticlesPage;