import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 20,
    borderBottom: 2,
    borderBottomColor: '#3b82f6',
    paddingBottom: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: '#3b82f6',
    marginBottom: 10,
  },
  contactInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    fontSize: 10,
    color: '#64748b',
  },
  contactItem: {
    marginRight: 15,
  },
  section: {
    marginTop: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 10,
    textTransform: 'uppercase',
    borderBottom: 1,
    borderBottomColor: '#e2e8f0',
    paddingBottom: 5,
  },
  summary: {
    fontSize: 11,
    lineHeight: 1.6,
    color: '#334155',
    textAlign: 'justify',
  },
  experienceItem: {
    marginBottom: 15,
  },
  companyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  company: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  position: {
    fontSize: 11,
    color: '#3b82f6',
    marginBottom: 3,
  },
  duration: {
    fontSize: 10,
    color: '#64748b',
  },
  location: {
    fontSize: 10,
    color: '#64748b',
    fontStyle: 'italic',
  },
  expProjectItem: {
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 10,
    borderLeft: 2,
    borderLeftColor: '#e2e8f0',
  },
  expProjectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  expProjectName: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  expProjectRole: {
    fontSize: 10,
    color: '#3b82f6',
    marginBottom: 2,
  },
  expProjectDescription: {
    fontSize: 9,
    color: '#64748b',
    marginBottom: 3,
    fontStyle: 'italic',
  },
  expProjectTech: {
    fontSize: 9,
    color: '#64748b',
    marginBottom: 4,
  },
  achievementsList: {
    marginTop: 5,
    paddingLeft: 15,
  },
  achievement: {
    fontSize: 10,
    lineHeight: 1.5,
    color: '#334155',
    marginBottom: 3,
  },
  bulletPoint: {
    width: 4,
    height: 4,
    backgroundColor: '#3b82f6',
    borderRadius: 2,
    marginRight: 8,
    marginTop: 5,
  },
  achievementRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  educationItem: {
    marginBottom: 12,
  },
  degree: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 3,
  },
  institution: {
    fontSize: 11,
    color: '#3b82f6',
    marginBottom: 2,
  },
  skillCategory: {
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 5,
  },
  skillsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillItem: {
    fontSize: 9,
    color: '#334155',
    backgroundColor: '#f1f5f9',
    padding: '4 8',
    borderRadius: 3,
  },
  projectItem: {
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 3,
  },
  projectDescription: {
    fontSize: 10,
    lineHeight: 1.4,
    color: '#334155',
    marginBottom: 4,
  },
  projectTech: {
    fontSize: 9,
    color: '#64748b',
    fontStyle: 'italic',
  },
  projectLinks: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 3,
  },
  link: {
    fontSize: 9,
    color: '#3b82f6',
    textDecoration: 'none',
  },
  certificationsList: {
    paddingLeft: 15,
  },
  certificationItem: {
    fontSize: 10,
    color: '#334155',
    marginBottom: 4,
  },
});

const ResumePDF = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.name}>{data.personal.name}</Text>
        <Text style={styles.title}>{data.personal.title}</Text>
        <View style={styles.contactInfo}>
          <Text style={styles.contactItem}>{data.personal.email}</Text>
          <Text style={styles.contactItem}>{data.personal.location}</Text>
          <Link src={data.personal.github} style={styles.link}>
            GitHub
          </Link>
          <Link src={data.personal.linkedin} style={styles.link}>
            LinkedIn
          </Link>
        </View>
      </View>

      {/* Summary Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.summary}>{data.summary}</Text>
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        {data.experience.map((exp, index) => (
          <View key={index} style={styles.experienceItem}>
            <View style={styles.companyHeader}>
              <Text style={styles.company}>{exp.company}</Text>
              <Text style={styles.duration}>
                {exp.startDate} - {exp.endDate}
              </Text>
            </View>
            <Text style={styles.position}>{exp.position}</Text>
            <Text style={styles.location}>{exp.location}</Text>
            {/* Render projects if available */}
            {exp.projects && exp.projects.map((project, pIdx) => (
              <View key={pIdx} style={styles.expProjectItem}>
                <View style={styles.expProjectHeader}>
                  <Text style={styles.expProjectName}>{project.name}</Text>
                  <Text style={styles.duration}>{project.period}</Text>
                </View>
                <Text style={styles.expProjectRole}>{project.role} | Team: {project.teamSize}</Text>
                <Text style={styles.expProjectDescription}>{project.description}</Text>
                <Text style={styles.expProjectTech}>Tech: {project.techStack.join(', ')}</Text>
                <View style={styles.achievementsList}>
                  {project.achievements.map((achievement, idx) => (
                    <View key={idx} style={styles.achievementRow}>
                      <View style={styles.bulletPoint} />
                      <Text style={styles.achievement}>{achievement}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
            {/* Fallback for old format with direct achievements */}
            {exp.achievements && !exp.projects && (
              <View style={styles.achievementsList}>
                {exp.achievements.map((achievement, idx) => (
                  <View key={idx} style={styles.achievementRow}>
                    <View style={styles.bulletPoint} />
                    <Text style={styles.achievement}>{achievement}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {data.education.map((edu, index) => (
          <View key={index} style={styles.educationItem}>
            <Text style={styles.degree}>{edu.degree}</Text>
            <Text style={styles.institution}>
              {edu.institution} - {edu.location}
            </Text>
            <Text style={styles.duration}>Graduated: {edu.graduationYear}</Text>
            {edu.achievements && (
              <View style={styles.achievementsList}>
                {edu.achievements.map((achievement, idx) => (
                  <View key={idx} style={styles.achievementRow}>
                    <View style={styles.bulletPoint} />
                    <Text style={styles.achievement}>{achievement}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        {data.skills.map((skillCategory, index) => (
          <View key={index} style={styles.skillCategory}>
            <Text style={styles.categoryName}>{skillCategory.category}</Text>
            <View style={styles.skillsList}>
              {skillCategory.items.map((skill, idx) => (
                <Text key={idx} style={styles.skillItem}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Projects Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Projects</Text>
        {data.projects.map((project, index) => (
          <View key={index} style={styles.projectItem}>
            <Text style={styles.projectTitle}>{project.title}</Text>
            <Text style={styles.projectDescription}>{project.description}</Text>
            <Text style={styles.projectTech}>
              Technologies: {project.technologies.join(', ')}
            </Text>
            <View style={styles.projectLinks}>
              {project.githubUrl && (
                <Link src={project.githubUrl} style={styles.link}>
                  GitHub
                </Link>
              )}
              {project.liveUrl && (
                <Link src={project.liveUrl} style={styles.link}>
                  Live Demo
                </Link>
              )}
            </View>
          </View>
        ))}
      </View>

      {/* Certifications Section */}
      {data.certifications && data.certifications.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certifications</Text>
          <View style={styles.certificationsList}>
            {data.certifications.map((cert, index) => (
              <View key={index} style={styles.achievementRow}>
                <View style={styles.bulletPoint} />
                <Text style={styles.certificationItem}>{cert}</Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </Page>
  </Document>
);

export default ResumePDF;
