import React from "react";

const npm = () => {
  return (
    <div className="mb-80 mx-16">
        <h1 className="text-center text-4xl my-4">Node Package Manager</h1>
      npm is included as a recommended feature in the Node.js installer. npm
      consists of a command line client that interacts with a remote registry.
      It allows users to consume and distribute JavaScript modules that are
      available in the registry. Packages in the registry are in CommonJS format
      and include a metadata file in JSON format. 
      <br/>Over 1.3 million packages are
      available in the main npm registry.The registry does not have any vetting
      process for submission, which means that packages found there can
      potentially be low quality, insecure, or malicious.Instead, npm relies on
      user reports to take down packages if they violate policies by being low
      quality, insecure, or malicious.npm exposes statistics including number of
      downloads and number of depending packages to assist developers in judging
      the quality of packages.In npm version 6, the audit feature was introduced
      to help developers identify and fix security vulnerabilities in installed
      packages.
      <br/>The source of security vulnerabilities were taken from reports
      found on the Node Security Platform (NSP) and has been integrated with npm
      since npm's acquisition of NSP. npm can manage packages that are local
      dependencies of a particular project, as well as globally-installed
      JavaScript tools. When used as a dependency manager for a local project,
      npm can install, in one command, all the dependencies of a project through
      the package.json file.In the package.json file, each dependency can
      specify a range of valid versions using the semantic versioning scheme,
      allowing developers to auto-update their packages while at the same time
      avoiding unwanted breaking changes.npm also provides version-bumping tools
      for developers to tag their packages with a particular version.npm also
      provides the package-lock.json file which has the entry of the exact
      version used by the project after evaluating semantic versioning in
      package.json.
    </div>
  );
};

export default npm;
