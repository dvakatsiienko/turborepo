/* Core */
import Image, { type StaticImageData } from 'next/image';

/* Components */
import { Entry } from './Entry';

export const JobEntry = (props: JobEntryProps) => {
    const achievementListJSX = props.achievementList.map((achievement) => {
        return <li key = { achievement }>✅ {achievement}</li>;
    });

    return (
        <section className = 'job-entry'>
            <Image
                priority
                alt = 'Company logo'
                placeholder = 'blur'
                src = { props.comapnyLogoUrl }
                width = { 100 }
            />

            <Entry content = { props.employer } name = 'employer' />
            <Entry content = { props.position } name = 'position' />
            <Entry content = { props.project } name = 'project' />
            <Entry content = { props.manager } name = 'manager' />
            <Entry content = { <ul>{achievementListJSX}</ul> } name = 'achievements' />
        </section>
    );
};

/* Types */
interface JobEntryProps {
    employer:        string | React.ReactNode,
    position:        string,
    project:         string,
    manager:         string | React.ReactNode,
    achievementList: string[],
    comapnyLogoUrl:  StaticImageData,
}
