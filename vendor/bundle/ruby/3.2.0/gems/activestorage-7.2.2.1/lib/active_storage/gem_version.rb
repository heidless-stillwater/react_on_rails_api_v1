# frozen_string_literal: true

module ActiveStorage
  # Returns the currently loaded version of Active Storage as a +Gem::Version+.
  def self.gem_version
    Gem::Version.new VERSION::STRING
  end

  module VERSION
    MAJOR = 7
    MINOR = 2
    TINY  = 2
    PRE   = "1"

    STRING = [MAJOR, MINOR, TINY, PRE].compact.join(".")
  end
end
