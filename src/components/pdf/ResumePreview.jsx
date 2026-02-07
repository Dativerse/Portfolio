import { PDFViewer } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';
import { resumeData } from '../../data/resume';

const ResumePreview = () => {
  return (
    <div className="fixed inset-0 z-50 bg-gray-900">
      <div className="h-full w-full flex flex-col">
        {/* Header */}
        <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
          <h1 className="text-white font-semibold">Resume Preview (Real-time)</h1>
          <a
            href="/"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Back to Site
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1">
          <PDFViewer
            width="100%"
            height="100%"
            showToolbar={true}
            style={{ border: 'none' }}
          >
            <ResumePDF data={resumeData} />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
